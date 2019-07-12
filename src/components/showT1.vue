<template>
  <div>
    <app-header></app-header>
    <div class="wrapper" style="margin-top:75px;">
      <div>
        <b-row>
          <b-col cols="4"></b-col>
            <b-nav vertical class="w-100" style="margin-left:10px;">
              <b-nav-item ><b-link to="/">สถานะของเครื่อง</b-link></b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="ประวัติการใช้งาน"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item><b-link to="/usage_History_day">ประวัติการใช้งานรายวัน</b-link></b-dropdown-item>
                <b-dropdown-item><b-link to="/usage_History_week">ประวัติการใช้งานรายสัปดาห์</b-link></b-dropdown-item>
                <b-dropdown-item><b-link to="/usage_History_month">ประวัติการใช้งานรายเดือน</b-link></b-dropdown-item>
              </b-nav-item-dropdown>
              <!-- <b-nav-item>ควบคุมเครื่อง</b-nav-item> -->
            </b-nav>
        </b-row>
      </div>
      <div id="content">
        <section class="details-card">
          <div class="container">
            <div class="row offset-md-1" style="margin-bottom:20px; ">
                <img v-bind:src="imgmeterS" alt="">
                  เครื่องที่ : {{tankNum}} <br>
                  วันที่ : {{ posts.date | moment("ddd, MMMM Do YYYY") }}<br>
                  เวลา : {{ posts.date | moment("h:mm:ss") }} นาฬิกา<br>
                  ระยะที่วัดได้ : {{posts.specific_gravity / 10}} ซม.<br>
                  ค่าความถ่วงจำเพาะ : {{(((posts.specific_gravity / 10) * y) + c)}}<br>
                  <!-- อุณหภูมิ : {{posts.temp}} องศาเซลเซียส<br> -->
                  ชนิดของสารเคมี : สาร {{posts.type_chemical}}<br>
                  <!-- <p>{{posts.date}}</p> -->
              <!-- <div v-for="(post, index) in posts" :key="index">
                <p>Date : {{post.date}}</p>
                <p>SG : {{post.specific_gravity}}</p>
                <p>RC : {{post.residual_chemicals}}</p>
                <p>Temp : {{post.temp}}</p>
                <p>TC : {{post.type_chemical}}</p>
              </div> -->
            </div>
          </div>
          <div>
            <b-row>
              <b-col cols="4">
                <b-button variant="outline-primary"><router-link to="/">หน้าหลัก</router-link></b-button>
                <b-button variant="outline-primary" v-on:click="postAPI()">เริ่มทำงาน</b-button>
                <b-button variant="outline-primary" v-on:click="createPDF()">รายงาน</b-button>
              </b-col>
              <b-col cols="4">
                <select class="form-control "  ref="select" v-model="postData.typeChem">
                    <option disabled value="">Please select a chemical</option>
                    <option v-for="(listDatas, index) in listData" :key="index">{{ listDatas }}</option>
                </select>
              </b-col>
            </b-row>
          </div>
            <GChart
              type="LineChart"
              :data="chartData"
              :options="chartOptions"
            />
        </section>
      </div>
    </div>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import Jspdf from 'jspdf'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      error: [],
      posts: [],
      y: -0.2068,
      c: 5.4605,
      tankNum: 'AD1',
      postData: {
        tankNo: 'AD1',
        typeChem: ''
      },
      aa: 2,
      title: 'Login',
      href: '#',
      imgstatus: 'https://i.imgur.com/JIFQF9n.png',
      imgreport: 'https://i.imgur.com/ac0C6cs.png',
      imgcontrol: 'https://i.imgur.com/dRfcpfu.png',
      imgmeter: 'https://i.imgur.com/5e56zMj.png',
      imgmeterS: 'https://i.imgur.com/z7mzzE9.png',
      chartData: [
        ['Time', 'Tank 1'],
        ['08:00', 0],
        ['09:00', 10],
        ['10:00', 20],
        ['11:00', 30],
        ['12:00', 40],
        ['13:00', 50],
        ['14:00', 60],
        ['15:00', 70],
        ['16:00', 80],
        ['17:00', 90],
        ['18:00', 100]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          pointsVisible: true
        }
      },
      listData: ['Ba', 'Bb', 'Bc', 'Bd', 'Be', 'Bf', 'Bg'],
      postAPI () {
        axios.post('http://localhost:8081/start/post-start', this.postData)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.error.push(e)
          })
      }
    }
  },
  methods: {
    createPDF () {
      let pdfName = 'AD1Report'
      var doc = new Jspdf()
      doc.text('Hello World', 10, 10)
      doc.save(pdfName + '.pdf')
    }
  },
  beforeCreate () {
  },
  created () {
    axios.get('http://localhost:8081/chemicaltank/get-last-chemicaltank')
      .then(response => {
        this.posts = response.data
        console.log(this.posts.date)
      }).catch(e => {
        this.error.push(e)
      })
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #d2691e;
  color: rgb(8, 8, 8);
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid#D2691E;
}

#sidebar ul p {
  color: rgb(7, 7, 7);
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: rgb(5, 5, 5);
  background: rgb(219, 152, 50);
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: rgb(7, 7, 7);
  background: #a54d12;
}
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
@media (max-width: 768px) {
#sidebar {
  margin-left: -250px;
}
#sidebar.active {
  margin-left: 0;
}
#sidebarCollapse span {
  display: none;
}
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #D2691E;
    }

    #sidebar ul p {
  color: rgb(7, 7, 7);
  padding: 10px;
    }
#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: rgb(5, 5, 5);
  background: rgb(219, 152, 50);
    }
#sidebar ul li.active>a,a[aria-expanded="true"] {
  color: rgb(7, 7, 7);
  background: #a54d12;
}
a[data-toggle="collapse"] {
  position: relative;
}
.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: rgb(156, 91, 44);
}
a.article,a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}
section{
  padding: 50px 0;
}

}
</style>

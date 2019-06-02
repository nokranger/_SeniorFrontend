<template>
  <div>
    <app-header></app-header>
    <div class="wrapper" style="margin-top:75px;">
      <nav class="sidebar">
        <ul class="list-unstyled components">
          <li>
            <a v-bind:href="href">&nbsp;&nbsp;
              <img v-bind:src="imgstatus" width="38px" height="38px" align="absmiddle">&nbsp;&nbsp;&nbsp;&nbsp;สถานะของเครื่อง
            </a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">&nbsp;&nbsp;
              <img src="../assets/img/report.png" width="40px" height="40px" align="absmiddle">&nbsp;&nbsp;&nbsp;ประวัติการใช้งาน
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="report_day.html">
                  <img src="../assets/img/day.png" width="30px" height="30px" align="absmiddle">&nbsp;&nbsp;ประวัติการใช้งานรายวัน
                </a>
              </li>
              <li>
                <a href="report_month.html">
                  <img src="../assets/img/month.png" width="30px" height="30px" align="absmiddle">&nbsp;&nbsp;ประวัติการใช้งานรายเดือน
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="control.html">
              &nbsp;
              <img src="../assets/img/control.png" width="50px" height="50px" align="absmiddle">&nbsp; ควบคุมเครื่อง
            </a>
          </li>
          <li>
            <a href="index.html">
              &nbsp;
              <img src="../assets/img/logout.png" width="52px" height="52px" align="absmiddle">&nbsp;&nbsp;ออกจากระบบ
            </a>
          </li>
        </ul>
      </nav>
      <div id="content">
        <section class="details-card">
          <div class="container">
            <div class="row offset-md-1" style="margin-bottom:20px; ">
                <img v-bind:src="imgmeterS" alt="">
              วันที่ : 25/04/2562 <br>
              เวลา : 21:01<br>
              ค่าความถ่วงจำเพาะ : 0.198<br>
              อุณหภูมิ : 33 องศาเซลเซียส<br>
              ชนิดของสารเคมี : สาร A<br>
            </div>
          </div>
          <button><router-link to="/">หน้าหลัก</router-link></button>
          <button>อ่านค่า</button>
          <button>เริ่มทำงาน</button>
            <GChart
              type="LineChart"
              :data="chartData"
              :options="chartOptions"
            />
        </section>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
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
      }
    }
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

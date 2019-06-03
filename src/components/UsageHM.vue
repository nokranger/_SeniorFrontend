<template>
  <div>
    <app-header></app-header>
    <div class="wrapper" style="margin-top:75px;">
      <div>
        <b-row>
          <b-col cols="4"></b-col>
            <b-nav vertical class="w-100" style="margin-left:10px;" type="dark" variant="dark">
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
              <b-nav-item>ควบคุมเครื่อง</b-nav-item>
            </b-nav>
        </b-row>
      </div>
      <div id="content">
        <div class="container">
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>
          <div>
              <GChart
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
              />
          </div>
        </div>
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
      imgmeter: 'https://i.imgur.com/z7mzzE9.png',
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }],
      chartData: [
        ['Time', 'Tank 1', 'Tank 2', 'Tank 3'],
        ['08:00', 0, 20, 50],
        ['09:00', 10, 30, 110],
        ['10:00', 20, 40, 90],
        ['11:00', 30, 50, 70],
        ['12:00', 40, 70, 75],
        ['13:00', 50, 60, 80],
        ['14:00', 60, 30, 10],
        ['15:00', 70, 40, 15],
        ['16:00', 80, 80, 20],
        ['17:00', 90, 85, 30],
        ['18:00', 100, 90, 100]
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

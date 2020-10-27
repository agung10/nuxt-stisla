<template>
  <div>
    <div class="section-header">
      <h1>Dashboard</h1>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-primary">
            <i class="far fa-user"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Total Admin</h4>
            </div>
            <div class="card-body">10</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-danger">
            <i class="far fa-newspaper"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>News</h4>
            </div>
            <div class="card-body">42</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-warning">
            <i class="far fa-file"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Reports</h4>
            </div>
            <div class="card-body">1,201</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-success">
            <i class="fas fa-circle"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Online Users</h4>
            </div>
            <div class="card-body">47</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>Statistics</h4>
            <div class="card-header-action">
              <div class="btn-group">
                <a href="javascript:void(0)" class="btn btn-primary">Week</a>
                <a href="javascript:void(0)" class="btn">Month</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <canvas id="myChart" height="182"></canvas>
            <div class="statistic-details mt-sm-4">
              <div class="statistic-details-item">
                <span class="text-muted"
                  ><span class="text-primary"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                  7%</span
                >
                <div class="detail-value">$243</div>
                <div class="detail-name">Today's Sales</div>
              </div>
              <div class="statistic-details-item">
                <span class="text-muted"
                  ><span class="text-danger"
                    ><i class="fas fa-caret-down"></i
                  ></span>
                  23%</span
                >
                <div class="detail-value">$2,902</div>
                <div class="detail-name">This Week's Sales</div>
              </div>
              <div class="statistic-details-item">
                <span class="text-muted"
                  ><span class="text-primary"
                    ><i class="fas fa-caret-up"></i></span
                  >9%</span
                >
                <div class="detail-value">$12,821</div>
                <div class="detail-name">This Month's Sales</div>
              </div>
              <div class="statistic-details-item">
                <span class="text-muted"
                  ><span class="text-primary"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                  19%</span
                >
                <div class="detail-value">$92,142</div>
                <div class="detail-name">This Year's Sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>This Week Stats</h4>
            <div class="card-header-action">
              <div class="dropdown">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle btn btn-primary"
                  data-toggle="dropdown"
                  >Filter</a
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" class="dropdown-item has-icon"
                    ><i class="far fa-circle"></i> Electronic</a
                  >
                  <a href="javascript:void(0)" class="dropdown-item has-icon"
                    ><i class="far fa-circle"></i> T-shirt</a
                  >
                  <a href="javascript:void(0)" class="dropdown-item has-icon"
                    ><i class="far fa-circle"></i> Hat</a
                  >
                  <div class="dropdown-divider"></div>
                  <a href="javascript:void(0)" class="dropdown-item">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="summary">
              <div class="summary-info">
                <h4>$1,053</h4>
                <div class="text-muted">Sold 3 items on 2 customers</div>
                <div class="d-block mt-2">
                  <a href="javascript:void(0)">View All</a>
                </div>
              </div>
              <div class="summary-item">
                <h6>Item List <span class="text-muted">(3 Items)</span></h6>
                <ul class="list-unstyled list-unstyled-border">
                  <li class="media">
                    <a href="javascript:void(0)">
                      <img
                        class="mr-3 rounded"
                        width="50"
                        src="/img/products/product-1-50.png"
                        alt="product"
                      />
                    </a>
                    <div class="media-body">
                      <div class="media-right">$405</div>
                      <div class="media-title">
                        <a href="javascript:void(0)">PlayStation 9</a>
                      </div>
                      <div class="text-muted text-small">
                        by <a href="javascript:void(0)">Hasan Basri</a>
                        <div class="bullet"></div>
                        Sunday
                      </div>
                    </div>
                  </li>
                  <li class="media">
                    <a href="javascript:void(0)">
                      <img
                        class="mr-3 rounded"
                        width="50"
                        src="/img/products/product-2-50.png"
                        alt="product"
                      />
                    </a>
                    <div class="media-body">
                      <div class="media-right">$499</div>
                      <div class="media-title"><a href="javascript:void(0)">RocketZ</a></div>
                      <div class="text-muted text-small">
                        by <a href="javascript:void(0)">Hasan Basri</a>
                        <div class="bullet"></div>
                        Sunday
                      </div>
                    </div>
                  </li>
                  <li class="media">
                    <a href="javascript:void(0)">
                      <img
                        class="mr-3 rounded"
                        width="50"
                        src="/img/products/product-3-50.png"
                        alt="product"
                      />
                    </a>
                    <div class="media-body">
                      <div class="media-right">$149</div>
                      <div class="media-title">
                        <a href="javascript:void(0)">Xiaomay Readme 4.0</a>
                      </div>
                      <div class="text-muted text-small">
                        by <a href="javascript:void(0)">Kusnaedi</a>
                        <div class="bullet"></div>
                        Tuesday
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
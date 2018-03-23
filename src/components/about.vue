<template>
  <div class="about">
    <div class="about-1">
      <div class="h">
        <span class="left">关于如医</span>
        <span class="right">WHO WE ARE!</span>
      </div>
      <div class="c">
        <p>如医商城是经国家食品药品监督管理局批准的合法网上药品商城。</p>
        <p>我们专注于B2B+O2O 业务模式，致力于利用线上医药电商平台“如医商城”，建立扁平化渠道，缩短供应链的流通环节，为终端客户提供大量具有价格优势的畅销医药产品，能够满足门店一站式的集中采购需求。同时我们提供辅助药店运营、实现020功能及数字药店系统。如医商城是未来药品采购行业的变革者，先行者，是带领广大药店走向新的数字化药店的领路者！愿如医与您一路同行！</p>
        <div><img src="../images/ruyi_shop_poster_license.png" alt=""></div>
      </div>
      <div class="g">
        <p>
          输入邮箱获取
          <span>如医首营资料</span>
        </p>
        <div>
          <input class="border-1px" type="email" name="email" placeholder="请输入邮箱账号"/>
        </div>
        <p class="info">您也可以在电脑端访问如医官网下载首营资料</p>
        <div>
          <button class="btn btn-get">获取</button>
        </div>
      </div>
    </div>
    <div class="about-2">
      <div class="h">
        <span class="left" style="width:7rem;">战略合作伙伴</span>
        <span class="right" style="width:calc(100% - 8.5rem);">STRATEGIC PARTNER</span>
      </div>
      <div class="i">
        <img src="../images/pingan.jpg" alt="">
      </div>
    </div>
    <div class="about-3">
      <div class="h">
        <span class="left">药品入库</span>
        <span class="right">DRUGS INSIDE THE WAREHOUSE</span>
      </div>
      <ul class="drug">
        <li class="">
          <div class="l"><img src="../images/ruyi_shop_poster_gallery_1.jpg" alt=""></div>
          <div class="r">
            <h3>生产厂商</h3>
            <p>药品直供100%正品</p>
          </div>
        </li>
        <li>
          <div class="r">
            <h3>质检中心</h3>
            <p>专业药师 抽样检测</p>
          </div>
          <div class="l" style="border-left: 0.5rem solid #F2F4F8;border-right:none;"><img src="../images/ruyi_shop_poster_gallery_2.jpg" alt=""></div>
        </li>
        <li>
          <div class="l"><img src="../images/ruyi_shop_poster_gallery_3.jpg" alt=""></div>
          <div class="r">
            <h3>先进仓储</h3>
            <p>恒温恒湿仓库</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="about-4">
      <div class="h">
        <span class="left">包装运输</span>
        <span class="right">PACKING AND SHIPPIING</span>
      </div>
      <dl class="pack">
        <dt>
          <img src="../images/ruyi_shop_poster_transport_1.jpg" alt="">
        </dt>
        <dd>
          <div class="clear">
            <span class="num">01</span>
            <h4>包装可靠</h4>
            <p>
              包装可靠 安全无忧
            </p>
          </div>
          <div class="introduce">
            如医在包装发货时，使用专业的药品包装方式。最大程度保证药品在运输时不会受到物流颠簸给客户带来损失，请放心购买。
          </div>
        </dd>
      </dl>
      <dl class="pack">
        <dt>
          <img src="../images/ruyi_shop_poster_transport_2.jpg" alt="">
        </dt>
        <dd>
          <div class="clear">
            <span class="num">02</span>
            <h4>正规发票</h4>
            <p>
              正规发票 报税无忧
            </p>
          </div>
          <div class="introduce">
            如医是上海获批准的互联网药品合法经营企业，购买商品后都能开具正规发票，报税无忧。
          </div>
        </dd>
      </dl>
      <dl class="pack">
        <dt>
          <img src="../images/ruyi_shop_poster_transport_3.jpg" alt="">
        </dt>
        <dd>
          <div class="clear">
            <span class="num">03</span>
            <h4>高效物流</h4>
            <p>
              安全送达 方便快捷
            </p>
          </div>
          <div class="introduce">
            如医所有商品全部采用“第三方物流送货上门”的配送方式（部分城市需要到邮局自提），我们将根据你所订购商品的配送地址及商品所在库房的情况，就近为原则，将商品安全送达您所填写的配送地址。
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../css/about.scss";
</style>
<script>
  export default {
    name:'about'
  }
</script>

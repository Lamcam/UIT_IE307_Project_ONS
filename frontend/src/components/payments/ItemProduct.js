import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ItemProduct = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://product.hstatic.net/1000230347/product/artboard_1_copy_f85a03a6f7494317af18d21f556c1a00.jpg",
        }}
        style={styles.productImage}
      />

      <View style={styles.productContainer}>
        {/* Thông tin sản phẩm */}
        <View style={styles.productInfo}>
          <View style={styles.detailProductContainer}>
            <View>
              <Text
                style={styles.productName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {product.name}
              </Text>
              <View style={styles.productCategory}>
                <Text style={styles.categoryText}>{product.category}</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceQuantityContainer}>
            <View style={styles.productPriceContainer}>
              <Text style={styles.price}>{product.price} đ</Text>
              <Text style={styles.priceNotDiscount}>{product.price} đ</Text>
            </View>
            {/* Số lượng và các nút điều chỉnh */}
            <Text style={styles.quantityContainer}>x{product.quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    borderBottomWidth: 1, 
    borderBottomColor:"#ccc"
  },
  productImage: {
    height: 101,
    width: 101,
    borderRadius: 5,
  },
  productContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  detailProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 21,
    paddingBottom: 5,
  },
  productCategory: {
    borderColor: "#E5A5FF",
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    lineHeight: 21,
  },
  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productPriceContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    color: "#241E92",
    fontWeight: "bold",
  },
  priceNotDiscount: {
    fontSize: 12,
    color: "#CFCED6",
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EBEBEE",
    borderRadius: 4,
    paddingHorizontal: 5,
    gap: 5,
  },
  line: {
    height: 20,
    width: 1,
    backgroundColor: "#EBEBEE",
  },
  quantityInput: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#241E92",
    padding: 0,
    textAlign: "center",
  },

  circle: {
    marginRight: 10,
  },
});

export default ItemProduct;

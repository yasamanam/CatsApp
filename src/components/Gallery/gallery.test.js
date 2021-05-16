import Gallery from "./index";
import { Provider } from "react-redux";
import React from "react";
import { getACategory } from "./../../redux/modules/cats/getACategory/action";
import { shallow } from "enzyme";
import { testStore } from "./../../utils";

const setup = (props = {}) => {
  const component = shallow(
    <Provider store={testStore()}>
      <Gallery {...props} />
    </Provider>
  );
  return component;
};

const findByTestAtrr = (component, attribute) => {
  const wrapper = component.find(`[data-test="${attribute}"]`);
  return wrapper;
};

describe("Gallery Component", () => {
  let component;

  beforeEach(() => {
    component = setup({
      getACategory: getACategory,
      category: [
        { id: 1, url: "test" },
        { id: 2, url: "test" },
      ],
      categoryLoading: false,
    });
  });

  it("shoulld render without errors", () => {});
});

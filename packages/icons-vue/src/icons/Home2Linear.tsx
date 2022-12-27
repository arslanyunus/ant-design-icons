// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home2LinearSvg from '@ant-design/icons-svg/lib/asn/Home2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home2Linear: Home2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2LinearSvg}></AntdIcon>;
};

Home2Linear.displayName = 'Home2Linear';
Home2Linear.inheritAttrs = false;
export default Home2Linear;
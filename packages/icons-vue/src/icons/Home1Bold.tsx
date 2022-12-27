// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home1BoldSvg from '@ant-design/icons-svg/lib/asn/Home1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home1Bold: Home1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home1BoldSvg}></AntdIcon>;
};

Home1Bold.displayName = 'Home1Bold';
Home1Bold.inheritAttrs = false;
export default Home1Bold;
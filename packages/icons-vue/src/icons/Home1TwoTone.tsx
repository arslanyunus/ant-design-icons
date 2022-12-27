// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Home1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home1TwoTone: Home1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home1TwoToneSvg}></AntdIcon>;
};

Home1TwoTone.displayName = 'Home1TwoTone';
Home1TwoTone.inheritAttrs = false;
export default Home1TwoTone;
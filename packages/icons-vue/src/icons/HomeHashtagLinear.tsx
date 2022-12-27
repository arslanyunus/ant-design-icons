// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagLinearSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagLinear: HomeHashtagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagLinearSvg}></AntdIcon>;
};

HomeHashtagLinear.displayName = 'HomeHashtagLinear';
HomeHashtagLinear.inheritAttrs = false;
export default HomeHashtagLinear;
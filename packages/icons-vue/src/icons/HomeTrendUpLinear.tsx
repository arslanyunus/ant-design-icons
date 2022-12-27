// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpLinearSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpLinear: HomeTrendUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpLinearSvg}></AntdIcon>;
};

HomeTrendUpLinear.displayName = 'HomeTrendUpLinear';
HomeTrendUpLinear.inheritAttrs = false;
export default HomeTrendUpLinear;
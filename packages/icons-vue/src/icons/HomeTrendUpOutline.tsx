// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpOutlineSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpOutline: HomeTrendUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpOutlineSvg}></AntdIcon>;
};

HomeTrendUpOutline.displayName = 'HomeTrendUpOutline';
HomeTrendUpOutline.inheritAttrs = false;
export default HomeTrendUpOutline;
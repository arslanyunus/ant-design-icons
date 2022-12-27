// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpBrokenSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpBroken: HomeTrendUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpBrokenSvg}></AntdIcon>;
};

HomeTrendUpBroken.displayName = 'HomeTrendUpBroken';
HomeTrendUpBroken.inheritAttrs = false;
export default HomeTrendUpBroken;
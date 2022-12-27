// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpBoldSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpBold: HomeTrendUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpBoldSvg}></AntdIcon>;
};

HomeTrendUpBold.displayName = 'HomeTrendUpBold';
HomeTrendUpBold.inheritAttrs = false;
export default HomeTrendUpBold;
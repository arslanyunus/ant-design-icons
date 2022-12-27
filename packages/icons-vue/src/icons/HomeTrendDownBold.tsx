// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownBoldSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownBold: HomeTrendDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownBoldSvg}></AntdIcon>;
};

HomeTrendDownBold.displayName = 'HomeTrendDownBold';
HomeTrendDownBold.inheritAttrs = false;
export default HomeTrendDownBold;
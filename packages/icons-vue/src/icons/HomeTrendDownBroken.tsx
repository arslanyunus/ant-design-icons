// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownBrokenSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownBroken: HomeTrendDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownBrokenSvg}></AntdIcon>;
};

HomeTrendDownBroken.displayName = 'HomeTrendDownBroken';
HomeTrendDownBroken.inheritAttrs = false;
export default HomeTrendDownBroken;
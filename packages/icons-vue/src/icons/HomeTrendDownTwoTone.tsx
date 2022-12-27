// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownTwoTone: HomeTrendDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownTwoToneSvg}></AntdIcon>;
};

HomeTrendDownTwoTone.displayName = 'HomeTrendDownTwoTone';
HomeTrendDownTwoTone.inheritAttrs = false;
export default HomeTrendDownTwoTone;
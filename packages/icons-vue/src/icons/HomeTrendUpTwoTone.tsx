// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTrendUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendUpTwoTone: HomeTrendUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendUpTwoToneSvg}></AntdIcon>;
};

HomeTrendUpTwoTone.displayName = 'HomeTrendUpTwoTone';
HomeTrendUpTwoTone.inheritAttrs = false;
export default HomeTrendUpTwoTone;
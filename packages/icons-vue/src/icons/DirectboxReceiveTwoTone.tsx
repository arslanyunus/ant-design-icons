// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveTwoTone: DirectboxReceiveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveTwoToneSvg}></AntdIcon>;
};

DirectboxReceiveTwoTone.displayName = 'DirectboxReceiveTwoTone';
DirectboxReceiveTwoTone.inheritAttrs = false;
export default DirectboxReceiveTwoTone;
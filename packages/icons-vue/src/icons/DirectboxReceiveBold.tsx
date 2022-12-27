// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveBoldSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveBold: DirectboxReceiveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveBoldSvg}></AntdIcon>;
};

DirectboxReceiveBold.displayName = 'DirectboxReceiveBold';
DirectboxReceiveBold.inheritAttrs = false;
export default DirectboxReceiveBold;
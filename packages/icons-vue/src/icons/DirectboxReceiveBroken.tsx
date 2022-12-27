// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveBroken: DirectboxReceiveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveBrokenSvg}></AntdIcon>;
};

DirectboxReceiveBroken.displayName = 'DirectboxReceiveBroken';
DirectboxReceiveBroken.inheritAttrs = false;
export default DirectboxReceiveBroken;
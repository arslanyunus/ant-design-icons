// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendBroken: DirectboxSendBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendBrokenSvg}></AntdIcon>;
};

DirectboxSendBroken.displayName = 'DirectboxSendBroken';
DirectboxSendBroken.inheritAttrs = false;
export default DirectboxSendBroken;
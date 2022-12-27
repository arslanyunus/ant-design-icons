// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveOutline: DirectboxReceiveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveOutlineSvg}></AntdIcon>;
};

DirectboxReceiveOutline.displayName = 'DirectboxReceiveOutline';
DirectboxReceiveOutline.inheritAttrs = false;
export default DirectboxReceiveOutline;
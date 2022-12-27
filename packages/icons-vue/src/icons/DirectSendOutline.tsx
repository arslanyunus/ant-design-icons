// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectSendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendOutline: DirectSendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendOutlineSvg}></AntdIcon>;
};

DirectSendOutline.displayName = 'DirectSendOutline';
DirectSendOutline.inheritAttrs = false;
export default DirectSendOutline;
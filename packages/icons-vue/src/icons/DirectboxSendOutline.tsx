// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendOutline: DirectboxSendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendOutlineSvg}></AntdIcon>;
};

DirectboxSendOutline.displayName = 'DirectboxSendOutline';
DirectboxSendOutline.inheritAttrs = false;
export default DirectboxSendOutline;
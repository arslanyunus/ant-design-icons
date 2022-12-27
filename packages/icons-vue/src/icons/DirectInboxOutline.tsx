// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectInboxOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxOutline: DirectInboxOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxOutlineSvg}></AntdIcon>;
};

DirectInboxOutline.displayName = 'DirectInboxOutline';
DirectInboxOutline.inheritAttrs = false;
export default DirectInboxOutline;
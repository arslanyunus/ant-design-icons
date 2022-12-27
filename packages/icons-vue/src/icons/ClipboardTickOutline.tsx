// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickOutline: ClipboardTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickOutlineSvg}></AntdIcon>;
};

ClipboardTickOutline.displayName = 'ClipboardTickOutline';
ClipboardTickOutline.inheritAttrs = false;
export default ClipboardTickOutline;
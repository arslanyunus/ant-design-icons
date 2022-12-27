// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportOutline: ClipboardImportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportOutlineSvg}></AntdIcon>;
};

ClipboardImportOutline.displayName = 'ClipboardImportOutline';
ClipboardImportOutline.inheritAttrs = false;
export default ClipboardImportOutline;
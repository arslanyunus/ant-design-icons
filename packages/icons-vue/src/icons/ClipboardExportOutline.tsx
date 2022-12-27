// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportOutline: ClipboardExportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportOutlineSvg}></AntdIcon>;
};

ClipboardExportOutline.displayName = 'ClipboardExportOutline';
ClipboardExportOutline.inheritAttrs = false;
export default ClipboardExportOutline;
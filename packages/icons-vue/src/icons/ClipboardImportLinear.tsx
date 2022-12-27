// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportLinear: ClipboardImportLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportLinearSvg}></AntdIcon>;
};

ClipboardImportLinear.displayName = 'ClipboardImportLinear';
ClipboardImportLinear.inheritAttrs = false;
export default ClipboardImportLinear;
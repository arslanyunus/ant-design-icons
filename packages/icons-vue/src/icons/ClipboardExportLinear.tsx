// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportLinear: ClipboardExportLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportLinearSvg}></AntdIcon>;
};

ClipboardExportLinear.displayName = 'ClipboardExportLinear';
ClipboardExportLinear.inheritAttrs = false;
export default ClipboardExportLinear;
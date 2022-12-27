// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickBulkSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickBulk: ClipboardTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickBulkSvg}></AntdIcon>;
};

ClipboardTickBulk.displayName = 'ClipboardTickBulk';
ClipboardTickBulk.inheritAttrs = false;
export default ClipboardTickBulk;
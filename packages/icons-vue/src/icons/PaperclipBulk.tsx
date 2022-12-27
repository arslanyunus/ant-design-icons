// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperclipBulkSvg from '@ant-design/icons-svg/lib/asn/PaperclipBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperclipBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperclipBulk: PaperclipBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperclipBulkSvg}></AntdIcon>;
};

PaperclipBulk.displayName = 'PaperclipBulk';
PaperclipBulk.inheritAttrs = false;
export default PaperclipBulk;
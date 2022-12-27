// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachSquareBulkSvg from '@ant-design/icons-svg/lib/asn/AttachSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachSquareBulk: AttachSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachSquareBulkSvg}></AntdIcon>;
};

AttachSquareBulk.displayName = 'AttachSquareBulk';
AttachSquareBulk.inheritAttrs = false;
export default AttachSquareBulk;
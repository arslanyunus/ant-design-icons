// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleBulkSvg from '@ant-design/icons-svg/lib/asn/AttachCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleBulk: AttachCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleBulkSvg}></AntdIcon>;
};

AttachCircleBulk.displayName = 'AttachCircleBulk';
AttachCircleBulk.inheritAttrs = false;
export default AttachCircleBulk;
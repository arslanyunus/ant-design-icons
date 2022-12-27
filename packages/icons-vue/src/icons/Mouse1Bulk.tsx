// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1BulkSvg from '@ant-design/icons-svg/lib/asn/Mouse1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1Bulk: Mouse1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1BulkSvg}></AntdIcon>;
};

Mouse1Bulk.displayName = 'Mouse1Bulk';
Mouse1Bulk.inheritAttrs = false;
export default Mouse1Bulk;
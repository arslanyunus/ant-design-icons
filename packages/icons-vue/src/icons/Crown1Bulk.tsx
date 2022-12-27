// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1BulkSvg from '@ant-design/icons-svg/lib/asn/Crown1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1Bulk: Crown1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1BulkSvg}></AntdIcon>;
};

Crown1Bulk.displayName = 'Crown1Bulk';
Crown1Bulk.inheritAttrs = false;
export default Crown1Bulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1BulkSvg from '@ant-design/icons-svg/lib/asn/Lock1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1Bulk: Lock1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1BulkSvg}></AntdIcon>;
};

Lock1Bulk.displayName = 'Lock1Bulk';
Lock1Bulk.inheritAttrs = false;
export default Lock1Bulk;
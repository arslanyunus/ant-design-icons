// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1BulkSvg from '@ant-design/icons-svg/lib/asn/Glass1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1Bulk: Glass1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1BulkSvg}></AntdIcon>;
};

Glass1Bulk.displayName = 'Glass1Bulk';
Glass1Bulk.inheritAttrs = false;
export default Glass1Bulk;
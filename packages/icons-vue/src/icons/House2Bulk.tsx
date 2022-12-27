// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2BulkSvg from '@ant-design/icons-svg/lib/asn/House2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2Bulk: House2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2BulkSvg}></AntdIcon>;
};

House2Bulk.displayName = 'House2Bulk';
House2Bulk.inheritAttrs = false;
export default House2Bulk;
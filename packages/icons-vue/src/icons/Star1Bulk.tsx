// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1BulkSvg from '@ant-design/icons-svg/lib/asn/Star1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1Bulk: Star1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1BulkSvg}></AntdIcon>;
};

Star1Bulk.displayName = 'Star1Bulk';
Star1Bulk.inheritAttrs = false;
export default Star1Bulk;
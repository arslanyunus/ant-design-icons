// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1BulkSvg from '@ant-design/icons-svg/lib/asn/Weight1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1Bulk: Weight1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1BulkSvg}></AntdIcon>;
};

Weight1Bulk.displayName = 'Weight1Bulk';
Weight1Bulk.inheritAttrs = false;
export default Weight1Bulk;
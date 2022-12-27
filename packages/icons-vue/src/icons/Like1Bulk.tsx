// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1BulkSvg from '@ant-design/icons-svg/lib/asn/Like1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1Bulk: Like1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1BulkSvg}></AntdIcon>;
};

Like1Bulk.displayName = 'Like1Bulk';
Like1Bulk.inheritAttrs = false;
export default Like1Bulk;
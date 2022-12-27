// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2BulkSvg from '@ant-design/icons-svg/lib/asn/Box2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2Bulk: Box2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2BulkSvg}></AntdIcon>;
};

Box2Bulk.displayName = 'Box2Bulk';
Box2Bulk.inheritAttrs = false;
export default Box2Bulk;
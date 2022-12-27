// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3Bulk: ArrowLeft3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3BulkSvg}></AntdIcon>;
};

ArrowLeft3Bulk.displayName = 'ArrowLeft3Bulk';
ArrowLeft3Bulk.inheritAttrs = false;
export default ArrowLeft3Bulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBulk: ArrowBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBulkSvg}></AntdIcon>;
};

ArrowBulk.displayName = 'ArrowBulk';
ArrowBulk.inheritAttrs = false;
export default ArrowBulk;
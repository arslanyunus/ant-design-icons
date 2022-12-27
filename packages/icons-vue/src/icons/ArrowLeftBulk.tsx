// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftBulk: ArrowLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftBulkSvg}></AntdIcon>;
};

ArrowLeftBulk.displayName = 'ArrowLeftBulk';
ArrowLeftBulk.inheritAttrs = false;
export default ArrowLeftBulk;
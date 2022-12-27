// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftBulk: ArrowCircleLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftBulkSvg}></AntdIcon>;
};

ArrowCircleLeftBulk.displayName = 'ArrowCircleLeftBulk';
ArrowCircleLeftBulk.inheritAttrs = false;
export default ArrowCircleLeftBulk;
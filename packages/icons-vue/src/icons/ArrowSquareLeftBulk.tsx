// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftBulk: ArrowSquareLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftBulkSvg}></AntdIcon>;
};

ArrowSquareLeftBulk.displayName = 'ArrowSquareLeftBulk';
ArrowSquareLeftBulk.inheritAttrs = false;
export default ArrowSquareLeftBulk;
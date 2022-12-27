// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleBulkSvg from '@ant-design/icons-svg/lib/asn/BubbleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleBulk: BubbleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleBulkSvg}></AntdIcon>;
};

BubbleBulk.displayName = 'BubbleBulk';
BubbleBulk.inheritAttrs = false;
export default BubbleBulk;
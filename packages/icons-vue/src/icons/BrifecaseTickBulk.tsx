// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickBulkSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickBulk: BrifecaseTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickBulkSvg}></AntdIcon>;
};

BrifecaseTickBulk.displayName = 'BrifecaseTickBulk';
BrifecaseTickBulk.inheritAttrs = false;
export default BrifecaseTickBulk;
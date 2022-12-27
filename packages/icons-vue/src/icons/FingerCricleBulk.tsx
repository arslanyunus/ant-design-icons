// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleBulkSvg from '@ant-design/icons-svg/lib/asn/FingerCricleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleBulk: FingerCricleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleBulkSvg}></AntdIcon>;
};

FingerCricleBulk.displayName = 'FingerCricleBulk';
FingerCricleBulk.inheritAttrs = false;
export default FingerCricleBulk;
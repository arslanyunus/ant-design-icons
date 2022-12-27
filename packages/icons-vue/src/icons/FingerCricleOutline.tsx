// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleOutlineSvg from '@ant-design/icons-svg/lib/asn/FingerCricleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleOutline: FingerCricleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleOutlineSvg}></AntdIcon>;
};

FingerCricleOutline.displayName = 'FingerCricleOutline';
FingerCricleOutline.inheritAttrs = false;
export default FingerCricleOutline;
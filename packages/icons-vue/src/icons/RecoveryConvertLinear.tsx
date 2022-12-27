// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertLinearSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertLinear: RecoveryConvertLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertLinearSvg}></AntdIcon>;
};

RecoveryConvertLinear.displayName = 'RecoveryConvertLinear';
RecoveryConvertLinear.inheritAttrs = false;
export default RecoveryConvertLinear;